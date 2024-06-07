export interface MitreAttackData {
  type: string
  id: string
  objects: MitreAttackInfo[]
  spec_version: string
}

export interface MitreAttackInfo {
  tactic_refs: string[]
  object_marking_refs: string[]
  id: string
  type: MitreType
  created: string
  created_by_ref: string
  external_references: ExternalReference[]
  modified: string
  name: string
  description: string
  x_mitre_version: string
  x_mitre_attack_spec_version: string
  x_mitre_modified_by_ref: string
  x_mitre_domains: string[]
  x_mitre_deprecated: boolean
  revoked: boolean
  x_mitre_platforms: string[]
  x_mitre_aliases: string[]
  labels: string[]
  x_mitre_contributors: string[]
  x_mitre_shortname: string
  kill_chain_phases: KillChainPhase[]
  x_mitre_detection: string
  x_mitre_is_subtechnique: boolean
  x_mitre_data_sources: string[]
  x_mitre_defense_bypassed: string[]
  x_mitre_permissions_required: string[]
  x_mitre_remote_support: boolean
  x_mitre_system_requirements: string[]
  x_mitre_impact_type: string[]
  x_mitre_effective_permissions: string[]
  x_mitre_network_requirements: boolean
  relationship_type: Relationship_type
  source_ref: string
  target_ref: string
  x_mitre_data_source_ref: string
  aliases: string[]
  first_seen: string
  last_seen: string
  x_mitre_first_seen_citation: string
  x_mitre_last_seen_citation: string
  x_mitre_collection_layers: string[]
  identity_class: string
  definition: Definition
  definition_type: string;
}

export interface ExternalReference {
  source_name: string
  description: string
  url: string
  external_id: string
}

export interface KillChainPhase {
  kill_chain_name: string
  phase_name: string
}

export interface Definition {
  statement: string
}

export type MitreType =
'bundle' |
'marking-definition' |
'definition' |
'x-mitre-matrix' |
'x-mitre-tactic' |
'course-of-action' |
"tool" |
"attack-pattern" |
"relationship " |
"malware"



export type Relationship_type =
'mitigates' |
'uses'|
'detects' |
'subtechnique-of'

