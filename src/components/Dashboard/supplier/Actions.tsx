import Button from "@/components/Button/Button"

interface IProps {
  inEditing: boolean,
  reset: () => void,
  loading: boolean,
  handleSupplierDelete: () => void,
  setInEditing: (value: boolean | ((InEditing: boolean) => boolean)) => void;
}

export default function Actions(props: IProps) {
  return (
    <span className={"flex gap-2 justify-end pt-6 pb-2"}>
      {props.inEditing ? (
        <>
          <Button key={"button_Cancel"} type='button' buttonStyle='secondary'
            handleClick={() => {
              props.reset()
              props.setInEditing((InEditing) => !InEditing)
            }}
          >
            Cancelar
          </Button>
          <Button key={"button_Save"} isLoading={props.loading} type='submit' buttonStyle='primary'>
            Salvar
          </Button>
        </>
      ) : (
        <>
          <Button key={"button_Delete"} handleClick={() => props.handleSupplierDelete()} type='button' buttonStyle='secondary'>
            Excluir Fornecedor
          </Button>
          <Button key={"button_Edit"} handleClick={() => props.setInEditing((InEditing) => !InEditing)} type='button' buttonStyle='primary'>
            Editar
          </Button>
        </>
      )
      }
    </span >
  )
}