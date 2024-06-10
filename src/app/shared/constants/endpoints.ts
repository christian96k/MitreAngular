/**
 * Constant containing API version endpoints.
 * @typedef {object} VersionsConstant
 * @property {string} V1 - Version 1 of the API.
 */

/**
 * Constant containing API endpoints.
 * @typedef {object} EndpointsConstant
 * @property {string} MITRE - Endpoint for Mitre API.
 */

/** @type {VersionsConstant} */
export const VERSIONS = {
  /**
   * Version 1 of the API.
   */
  V1: 'v1',
};

/** @type {EndpointsConstant} */
export const ENDPOINTS = {
  /**
   * Endpoint for Mitre API.
   */
  MITRE: `${VERSIONS.V1}/mitre`,
};
