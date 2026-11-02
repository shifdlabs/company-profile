<template>
  <div class="rte">
    <div v-if="editor" class="rte-toolbar" role="toolbar" aria-label="Format teks">
      <button type="button" :class="btn(editor.isActive('heading', { level: 2 }))" title="Subjudul (H2)" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()">H2</button>
      <button type="button" :class="btn(editor.isActive('heading', { level: 3 }))" title="Sub-subjudul (H3)" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()">H3</button>
      <span class="rte-sep"></span>
      <button type="button" :class="btn(editor.isActive('bold'))" title="Tebal (Ctrl+B)" @click="editor.chain().focus().toggleBold().run()"><b>B</b></button>
      <button type="button" :class="btn(editor.isActive('italic'))" title="Miring (Ctrl+I)" @click="editor.chain().focus().toggleItalic().run()"><i>I</i></button>
      <button type="button" :class="btn(editor.isActive('underline'))" title="Garis bawah (Ctrl+U)" @click="editor.chain().focus().toggleUnderline().run()"><u>U</u></button>
      <button type="button" :class="btn(editor.isActive('link'))" title="Link" @click="setLink">Link</button>
      <span class="rte-sep"></span>
      <button type="button" :class="btn(editor.isActive('bulletList'))" title="Daftar poin" @click="editor.chain().focus().toggleBulletList().run()">• List</button>
      <button type="button" :class="btn(editor.isActive('orderedList'))" title="Daftar bernomor" @click="editor.chain().focus().toggleOrderedList().run()">1. List</button>
      <button type="button" :class="btn(editor.isActive('blockquote'))" title="Kutipan" @click="editor.chain().focus().toggleBlockquote().run()">“ ”</button>
      <button type="button" :class="btn(false)" title="Garis pemisah" @click="editor.chain().focus().setHorizontalRule().run()">―</button>
      <span class="rte-sep"></span>
      <button type="button" :class="btn(false)" title="Sisipkan gambar" :disabled="uploading" @click="fileInput?.click()">
        {{ uploading ? 'Mengupload…' : 'Gambar' }}
      </button>
      <button v-if="editor.isActive('image')" type="button" :class="btn(false)" title="Ubah alt text gambar" @click="editImageAlt">Alt gambar</button>
      <span class="rte-sep"></span>
      <button type="button" :class="btn(false)" title="Undo (Ctrl+Z)" :disabled="!editor.can().undo()" @click="editor.chain().focus().undo().run()">↶</button>
      <button type="button" :class="btn(false)" title="Redo (Ctrl+Shift+Z)" :disabled="!editor.can().redo()" @click="editor.chain().focus().redo().run()">↷</button>
      <input ref="fileInput" type="file" accept="image/jpeg,image/png,image/webp" class="hidden" @change="onFile" />
    </div>
    <p v-if="uploadError" class="rte-error" role="alert">{{ uploadError }}</p>
    <EditorContent :editor="editor" class="rte-content" />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Placeholder from '@tiptap/extension-placeholder'
import { uploadImage } from '../upload'

// Editor rich text untuk isi artikel. Hanya format yang juga diizinkan
// sanitizer backend: H2/H3, tebal, miring, garis bawah, link, list, kutipan,
// garis pemisah, dan gambar. Format lain (warna, font, H1) otomatis dibuang,
// termasuk saat copy-paste dari Word/Google Docs.
const props = defineProps<{ modelValue: string }>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

const fileInput = ref<HTMLInputElement | null>(null)
const uploading = ref(false)
const uploadError = ref('')

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit.configure({
      heading: { levels: [2, 3] },
      code: false,
      codeBlock: false,
      strike: false,
      link: { openOnClick: false, autolink: true, defaultProtocol: 'https' },
    }),
    Image.configure({ inline: false, allowBase64: false }),
    Placeholder.configure({ placeholder: 'Mulai menulis artikel… Pakai H2/H3 untuk subjudul.' }),
  ],
  onUpdate: ({ editor }) => emit('update:modelValue', editor.isEmpty ? '' : editor.getHTML()),
})

// Konten dari luar (mis. setelah artikel dimuat) menggantikan isi editor
watch(
  () => props.modelValue,
  (value) => {
    const current = editor.value?.isEmpty ? '' : editor.value?.getHTML()
    if (editor.value && value !== current) editor.value.commands.setContent(value, { emitUpdate: false })
  }
)

onBeforeUnmount(() => editor.value?.destroy())

const btn = (active: boolean) => ['rte-btn', { 'rte-btn--active': active }]

function setLink() {
  if (!editor.value) return
  const previous = editor.value.getAttributes('link').href as string | undefined
  const url = window.prompt('URL link (kosongkan untuk menghapus link):', previous ?? 'https://')
  if (url === null) return
  if (url.trim() === '' || url.trim() === 'https://') {
    editor.value.chain().focus().extendMarkRange('link').unsetLink().run()
    return
  }
  editor.value.chain().focus().extendMarkRange('link').setLink({ href: url.trim() }).run()
}

function askAlt(current = ''): string | null {
  const alt = window.prompt('Alt text gambar (deskripsi singkat isi gambar, wajib untuk SEO):', current)
  return alt === null ? null : alt.trim()
}

async function onFile(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  input.value = ''
  if (!file || !editor.value) return

  uploadError.value = ''
  uploading.value = true
  try {
    const src = await uploadImage(file)
    const alt = askAlt() ?? ''
    editor.value.chain().focus().setImage({ src, alt }).run()
  } catch (e) {
    uploadError.value = e instanceof Error ? e.message : 'Upload gambar gagal.'
  } finally {
    uploading.value = false
  }
}

function editImageAlt() {
  if (!editor.value) return
  const alt = askAlt(editor.value.getAttributes('image').alt ?? '')
  if (alt !== null) editor.value.chain().focus().updateAttributes('image', { alt }).run()
}
</script>

<style scoped>
.rte { overflow: hidden; border: 1.5px solid #d4d7de; border-radius: 10px; background: #fff; }
.rte:focus-within { border-color: #3279e7; box-shadow: 0 0 0 3px rgba(50, 121, 231, .18); }
.rte-toolbar { position: sticky; top: 57px; z-index: 10; display: flex; flex-wrap: wrap; align-items: center; gap: 2px; border-bottom: 1px solid #e6e8ec; padding: 6px; background: #fafafa; }
.rte-btn { min-width: 34px; border-radius: 6px; padding: 5px 9px; color: #2b3445; font-size: 13px; font-weight: 600; }
.rte-btn:hover:not(:disabled) { background: #eceef2; }
.rte-btn:disabled { opacity: .4; }
.rte-btn--active { color: #fff; background: #17191c; }
.rte-btn--active:hover:not(:disabled) { background: #17191c; }
.rte-sep { width: 1px; height: 20px; margin: 0 4px; background: #dfe2e7; }
.rte-error { border-bottom: 1px solid #fecaca; padding: 8px 12px; color: #b91c1c; background: #fef2f2; font-size: 13px; }

/* Tampilan isi editor, mendekati tampilan artikel di blog */
.rte-content :deep(.tiptap) { min-height: 420px; padding: 20px 24px; color: #2b3445; font-size: 17px; line-height: 1.7; outline: none; }
.rte-content :deep(.tiptap > * + *) { margin-top: 1em; }
.rte-content :deep(h2) { margin-top: 1.6em; color: #17191c; font-size: 26px; font-weight: 700; letter-spacing: -.03em; line-height: 1.25; }
.rte-content :deep(h3) { margin-top: 1.4em; color: #17191c; font-size: 21px; font-weight: 700; line-height: 1.3; }
.rte-content :deep(a) { color: #3279e7; text-decoration: underline; }
.rte-content :deep(ul) { padding-left: 1.4em; list-style: disc; }
.rte-content :deep(ol) { padding-left: 1.4em; list-style: decimal; }
.rte-content :deep(blockquote) { border-left: 4px solid #ffbf1f; padding-left: 18px; font-style: italic; }
.rte-content :deep(hr) { border: 0; border-top: 2px dashed #d4d7de; }
.rte-content :deep(img) { max-width: 100%; height: auto; border-radius: 8px; }
.rte-content :deep(img.ProseMirror-selectednode) { outline: 3px solid #3279e7; }
.rte-content :deep(p.is-editor-empty:first-child::before) { float: left; height: 0; color: #9aa3b2; content: attr(data-placeholder); pointer-events: none; }
</style>
