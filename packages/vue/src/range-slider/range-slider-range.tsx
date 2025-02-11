import { defineComponent } from 'vue'
import { ark, type HTMLArkProps } from '../factory'
import { getValidChildren, type ComponentWithProps } from '../utils'
import { useRangeSliderContext } from './range-slider-context'

export type RangeSliderRangeProps = HTMLArkProps<'div'>

export const RangeSliderRange: ComponentWithProps<RangeSliderRangeProps> = defineComponent({
  name: 'RangeSliderRange',
  setup(_, { slots, attrs }) {
    const api = useRangeSliderContext()

    return () => (
      <ark.div {...api.value.rangeProps} {...attrs}>
        {() => getValidChildren(slots)}
      </ark.div>
    )
  },
})
