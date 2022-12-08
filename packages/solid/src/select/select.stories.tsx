import { For, Portal } from 'solid-js/web'
import {
  Select,
  SelectContent,
  SelectLabel,
  SelectOption,
  SelectOptionGroup,
  SelectOptionGroupLabel,
  SelectPositioner,
  SelectTrigger,
} from './'

export const Basic = () => {
  const options = [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
  ]
  return (
    <Select>
      {(context) => (
        <div>
          <SelectLabel>Framework:</SelectLabel>
          <SelectTrigger>
            <button>{context().selectedOption?.label ?? 'Select option'}</button>
          </SelectTrigger>
          <Portal>
            <SelectPositioner>
              <SelectContent>
                <SelectOptionGroup id="framework">
                  <SelectOptionGroupLabel htmlFor="framework">Frameworks</SelectOptionGroupLabel>
                  <For each={options}>
                    {(option) => (
                      <SelectOption {...option}>
                        <span>{option.label}</span>
                        {option.value === context().selectedOption?.value && '✓'}
                      </SelectOption>
                    )}
                  </For>
                </SelectOptionGroup>
              </SelectContent>
            </SelectPositioner>
          </Portal>
        </div>
      )}
    </Select>
  )
}
