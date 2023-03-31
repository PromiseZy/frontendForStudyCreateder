'use strict';

/**
 * serve controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::serve.serve');
