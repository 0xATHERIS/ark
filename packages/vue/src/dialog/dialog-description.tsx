import { defineComponent } from 'vue'
import { ark, type HTMLArkProps } from '../factory'
import { getValidChildren, type ComponentWithProps } from '../utils'
import { useDialogContext } from './dialog-context'

export type DialogDescriptionProps = HTMLArkProps<'p'>

export const DialogDescription: ComponentWithProps<DialogDescriptionProps> = defineComponent({
  name: 'DialogDescription',
  setup(_, { slots, attrs }) {
    const api = useDialogContext()

    return () => (
      <ark.p {...api.value.descriptionProps} {...attrs}>
        {() => getValidChildren(slots)}
      </ark.p>
    )
  },
})
