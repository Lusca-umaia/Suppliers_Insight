import HelpText from "@/components/HelpText/HelpText";
import { ChangeEvent } from "react";
import InputMask from 'react-input-mask';
import { UseFormRegister } from 'react-hook-form';

interface IProps extends IInputInformation {
  register: UseFormRegister<any>
  error?: string,
}

export default function FormInput(props: Omit<IProps, 'zod'>) {

  return (
    <div className={props.customClass}>
      <div className="flex gap-1 items-center">
        {props.label && (
          <label htmlFor={props.name} className=" text-sm font-semibold leading-6 text-gray-900">
            {props.label}{props.required && "*"}
          </label>
        )}
        {props.helpText && (
          <HelpText position={props.helpText.position} text={props.helpText.text} />
        )}
      </div>
      <div className="mt-1">
        {props.mask ? (
          <InputMask
            {...props.register(props.name)}
            id={props.name}
            maskChar='_'
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              props.handleChange && props.handleChange(e.target.value)
            }}
            mask={props.mask}
            alwaysShowMask
            required={props.required ? props.required : false}
            type={props.type}
            className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 font-medium text-sm'
          />
        ) : (
          <input
            {...props.register(props.name)}
            type={props.type}
            onChange={(e) => props.handleChange && props.handleChange(e.target.value)}
            id={props.name}
            disabled={props.disabled}
            className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 font-medium text-sm'
            required={props.required ? props.required : false}
          />
        )}
      </div>
      {props.error && (
        <p className="text-sm font-medium mt-0.5 text-red-600">{props.error}</p>
      )}
    </div>
  )
}