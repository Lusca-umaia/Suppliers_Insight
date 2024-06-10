interface IHelpText {
  text: string,
  position: "right" | "left"
}

interface IInputInformation {
  label?: string,
  name: string,
  type: string,
  required?: boolean,
  mask?: string,
  disabled?: boolean
  helpText?: IHelpText
  handleChange?: (value: string) => void,
  customClass?: string
}

interface INotification {
  id: string,
  message: string,
  type: "error" | "success",
  title: string
}

interface ISupplier {
  name: string,
  product: string,
  telephone: string,
  road?: string,
  city: string,
  id: string,
  state: string,
  number: number,
  address: string,
  email: string,
  cep: string,
}

interface IAction {
  onAction: () => void,
  content: string,
  type: "primary" | "secondary"
}

interface IHeaderOption {
  title: string,
  action?: IAction,
  hrefBack?: string,
  description?: string,
}

interface IHeaderOptions {
  home: IHeaderOption,
  suppliers: IHeaderOption,
  supplier: IHeaderOption,
  registerSupplier: IHeaderOption
}