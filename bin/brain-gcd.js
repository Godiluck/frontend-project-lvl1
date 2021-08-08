#!/usr/bin/env node
import gameBody from '../src/index.js';

import { question, correct, taskDescription } from '../src/brain-gcd-scripts.js';

gameBody(taskDescription, question, correct);
