export interface VersionedContent {
    title: string,
    body: string,
    effectiveDate: string
}

// I don't know if it's part of the test, but your instructions call 'versionContent', 'versionedContent.'
export interface Step {
    id: string,
    stepNumber: string,
    versionContent: VersionedContent[]
}

export interface SimpleStep {
    stepNumber: string,
    title: string,
    body: string
}