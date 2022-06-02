/****************************** 
 * Lexical_Decision_Task Test *
 ******************************/

import { PsychoJS } from './lib/core-2020.2.js';
import * as core from './lib/core-2020.2.js';
import { TrialHandler } from './lib/data-2020.2.js';
import { Scheduler } from './lib/util-2020.2.js';
import * as visual from './lib/visual-2020.2.js';
import * as sound from './lib/sound-2020.2.js';
import * as util from './lib/util-2020.2.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'lexical_decision_task';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.10';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var InstructionsClock;
var instructions;
var key_resp_1;
var TrialClock;
var fixation;
var text;
var response;
var EndClock;
var thank_you;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions',
    text: 'In this task you will be required to judge whether a string of letters is a word or a non-word. \n\nPress left arrow key for non-words and right arrow key for words. \n\nPlease respond as quickly as possible.\n\nPress space to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: 1.0, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Trial"
  TrialClock = new util.Clock();
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  thank_you = new visual.TextStim({
    win: psychoJS.window,
    name: 'thank_you',
    text: 'This is the end of the experiment.\n\nThank you for your time.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_1_allKeys;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instructions'-------
    t = 0;
    InstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_1.keys = undefined;
    key_resp_1.rt = undefined;
    _key_resp_1_allKeys = [];
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(instructions);
    InstructionsComponents.push(key_resp_1);
    
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Instructions'-------
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions* updates
    if (t >= 0.0 && instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions.tStart = t;  // (not accounting for frame time here)
      instructions.frameNStart = frameN;  // exact frame index
      
      instructions.setAutoDraw(true);
    }

    
    // *key_resp_1* updates
    if (t >= 0.0 && key_resp_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_1.tStart = t;  // (not accounting for frame time here)
      key_resp_1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_1.clearEvents(); });
    }

    if (key_resp_1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_1.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_1_allKeys = _key_resp_1_allKeys.concat(theseKeys);
      if (_key_resp_1_allKeys.length > 0) {
        key_resp_1.keys = _key_resp_1_allKeys[_key_resp_1_allKeys.length - 1].name;  // just the last key pressed
        key_resp_1.rt = _key_resp_1_allKeys[_key_resp_1_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Instructions'-------
    for (const thisComponent of InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_1.keys', key_resp_1.keys);
    if (typeof key_resp_1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_1.rt', key_resp_1.rt);
        routineTimer.reset();
        }
    
    key_resp_1.stop();
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'experimental_trials.xlsx',
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(TrialRoutineBegin(snapshot));
    trialsLoopScheduler.add(TrialRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(TrialRoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var _response_allKeys;
var TrialComponents;
function TrialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Trial'-------
    t = 0;
    TrialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text.setText(words);
    response.keys = undefined;
    response.rt = undefined;
    _response_allKeys = [];
    // keep track of which components have finished
    TrialComponents = [];
    TrialComponents.push(fixation);
    TrialComponents.push(text);
    TrialComponents.push(response);
    
    for (const thisComponent of TrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function TrialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Trial'-------
    // get current time
    t = TrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((fixation.status === PsychoJS.Status.STARTED || fixation.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    
    // *text* updates
    if (t >= 1 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *response* updates
    if (t >= 1 && response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response.tStart = t;  // (not accounting for frame time here)
      response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response.start(); }); // start on screen flip
    }

    if (response.status === PsychoJS.Status.STARTED) {
      let theseKeys = response.getKeys({keyList: ['right', 'left'], waitRelease: false});
      _response_allKeys = _response_allKeys.concat(theseKeys);
      if (_response_allKeys.length > 0) {
        response.keys = _response_allKeys[_response_allKeys.length - 1].name;  // just the last key pressed
        response.rt = _response_allKeys[_response_allKeys.length - 1].rt;
        // was this correct?
        if (response.keys == corrAns) {
            response.corr = 1;
        } else {
            response.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TrialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Trial'-------
    for (const thisComponent of TrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (response.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         response.corr = 1;  // correct non-response
      } else {
         response.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('response.keys', response.keys);
    psychoJS.experiment.addData('response.corr', response.corr);
    if (typeof response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('response.rt', response.rt);
        routineTimer.reset();
        }
    
    response.stop();
    // the Routine "Trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var EndComponents;
function EndRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'End'-------
    t = 0;
    EndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(thank_you);
    
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'End'-------
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thank_you* updates
    if (t >= 0.0 && thank_you.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thank_you.tStart = t;  // (not accounting for frame time here)
      thank_you.frameNStart = frameN;  // exact frame index
      
      thank_you.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((thank_you.status === PsychoJS.Status.STARTED || thank_you.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      thank_you.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'End'-------
    for (const thisComponent of EndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
