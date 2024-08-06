import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { useCycles } from '../../contexts/CyclesContext'
import { HistoryContainer, HistoryList, Status } from './styles'

export function HistoryPage() {
  const { cycles } = useCycles()

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate != null && (
                      <Status $statusColor="green">Concluído</Status>
                    )}

                    {cycle.interruptedDate != null && (
                      <Status $statusColor="red">Interrompido</Status>
                    )}

                    {cycle.finishedDate == null &&
                      cycle.interruptedDate == null && (
                        <Status $statusColor="yellow">Em andamento</Status>
                      )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
