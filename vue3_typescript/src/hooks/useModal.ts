import { provide, ref } from "vue";

export type ModalAction = {
  title: string;
  type: number | string;
  labelSubmit: string;
  labelCancel: string;
  onAfterOpened?: (props?: any) => void;
  onAfterClose?: (props?: any) => void;
  submit?: (props?: any) => void;
};

const useModal = (label: string, component: any, attrs?: ModalAction) => {
  const showModal = ref(false);
  const open = (): void => {
    showModal.value = true;
    if (attrs?.onAfterOpened) {
      attrs?.onAfterOpened();
    }
  };
  const close = (): void => {
    console.log("active close");
    showModal.value = false;
    if (attrs?.onAfterClose) {
      attrs?.onAfterClose();
    }
  };
  provide(label, { showModal, component, attrs, open, close });
  return { showModal, open, close };
};

export default useModal;
