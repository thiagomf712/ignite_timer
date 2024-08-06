import { Cycle, CyclesActions } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

function addNewCycle(newCycle: Cycle): CyclesActions {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

function markCurrentCycleAsFinished(): CyclesActions {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

function interruptCurrentCycle(): CyclesActions {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}

export const cyclesActions = {
  addNewCycle,
  markCurrentCycleAsFinished,
  interruptCurrentCycle,
}
