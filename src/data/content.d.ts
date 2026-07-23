export type Role = 'member' | 'leader';
export type Lesson = {
    id: string;
    title: string;
    action: string;
    why: string;
    success: string;
    type: 'real' | 'concept';
    visual?: string;
};
export declare const lessons: Record<Role, Lesson[]>;
export declare const terms: string[][];
export declare const problems: string[][];
export declare const templates: {
    'WORK_START_CHECKLIST.md': string;
    'WORK_COMPLETE_CHECKLIST.md': string;
    'PULL_REQUEST_TEMPLATE.md': string;
};
