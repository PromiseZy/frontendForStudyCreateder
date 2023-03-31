'use strict';

/**
 * serve service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::serve.serve');
