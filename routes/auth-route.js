'use strict';

const debug = require('debug')('mailRoom:auth-route');
const createError = require('http-errors');
const jsonParser = require('body-parser').json();
const Router = require('express').Router;

const authRouter = module.exports = Router();

//build out basic auth middleware then come back to this.
