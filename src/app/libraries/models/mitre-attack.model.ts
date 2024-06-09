export interface MitreAttackConfig {
  header: MitreAttackHeader;
  info: MitreAttackInfo;
  footer: MitreAttackFooter[];
}

export interface MitreAttackHeader {
  title: string;
  subtitle: string;
  chip: any;
}


export interface MitreAttackInfo {
  cells: any;

  label: string;
  class?: string;
  value: string;
}

export interface MitreCells {
  header:string;
  content: MitreCellsContent[]
}

export interface MitreCellsContent {
  value:string;
  chip?:any;
}

export interface MitreAttackFooter {
  phase:any;
  tecnique:any;
}
