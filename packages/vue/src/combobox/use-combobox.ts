import { connect, machine, type Context as ComboboxContext } from '@zag-js/combobox'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed, onMounted, watch, type UnwrapRef } from 'vue'
import { transformComposableProps, useId } from '../utils'

type ComboboxPropsContext = Omit<ComboboxContext, 'id'> & {
  modelValue?: ComboboxContext['inputValue']
}

export type UseComboboxProps = {
  context: ComboboxPropsContext
  emit: CallableFunction
  defaultValue?: ComboboxContext['inputValue']
}

export const useCombobox = (props: UseComboboxProps) => {
  const { context, emit, defaultValue } = transformComposableProps(props)

  const [state, send] = useMachine(
    machine({
      ...context,
      id: useId().value,
      inputValue: defaultValue,
      onClose() {
        emit('close')
      },
      onOpen() {
        emit('open')
      },
      onHighlight(details) {
        emit('highlight', details)
      },
      onInputChange(details) {
        emit('input-change', details)
        emit('update:modelValue', details.value)
      },
      onSelect(details) {
        emit('select', details)
      },
    }),
  )

  onMounted(() => {
    emit('update:modelValue', defaultValue)
  })

  watch(
    () => context.modelValue,
    (value, prevValue) => {
      if (value === prevValue) return
      if (value === undefined) return
      api.value.setInputValue(value)
    },
  )

  const api = computed(() => connect(state.value, send, normalizeProps))

  return api
}

export type UseComboboxReturn = UnwrapRef<ReturnType<typeof useCombobox>>
