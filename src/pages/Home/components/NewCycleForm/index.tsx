import { useContext } from 'react'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { CyclesContext } from '../..'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  const hasActiveCycle = activeCycle != null

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={hasActiveCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto Atlas" />
        <option value="Projeto Jupyter" />
        <option value="Projeto Nemesis" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={hasActiveCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
