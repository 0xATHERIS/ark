import { render, screen } from '@solidjs/testing-library'
import { createEffect, createSignal } from 'solid-js'
import { Environment, useEnvironmentContext } from '.'
import { type EnvironmentContext } from './environment-context'

const PrintEnvironment = () => {
  const getRootNode = useEnvironmentContext()
  const [rootNode, setRootNode] = createSignal<
    ReturnType<NonNullable<EnvironmentContext>> | undefined
  >(undefined)

  createEffect(() => {
    setRootNode(getRootNode?.())
  })

  return <pre aria-label="environment values">{rootNode()?.toString()}</pre>
}

const ComponentUnderTest = () => (
  <Environment value={document}>
    <PrintEnvironment />
  </Environment>
)

describe('Environment', () => {
  it('should have access to the environment values', async () => {
    render(() => <ComponentUnderTest />)
    expect(screen.getByLabelText('environment values').innerHTML).toMatchInlineSnapshot(
      '"[object HTMLDocument]"',
    )
  })
})
