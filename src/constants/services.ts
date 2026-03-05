export interface ServiceDeliverable {
  title: string
}

export type ServiceKey = 'mobile' | 'web' | 'consultation'

export const serviceDeliverables: Record<ServiceKey, ServiceDeliverable[]> = {
  mobile: [
    { title: 'services.deliverables.mobile.internalEnterpriseApps' },
    { title: 'services.deliverables.mobile.customerFacingApps' },
    { title: 'services.deliverables.mobile.businessProcessDigitalization' },
    { title: 'services.deliverables.mobile.salesAndServiceSupport' },
    { title: 'services.deliverables.mobile.dataDrivenPlatforms' },
  ],

  web: [
    { title: 'services.deliverables.web.businessWebApplications' },
    { title: 'services.deliverables.web.internalDashboards' },
    { title: 'services.deliverables.web.processAutomation' },
    { title: 'services.deliverables.web.customerPortals' },
  ],

  consultation: [
    { title: 'services.deliverables.consultation.problemDiscovery' },
    { title: 'services.deliverables.consultation.solutionScoping' },
    { title: 'services.deliverables.consultation.technicalAssessment' },
    { title: 'services.deliverables.consultation.roadmapGuidance' },
    { title: 'services.deliverables.consultation.buildVsBuy' },
  ],
}
