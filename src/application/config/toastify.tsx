interface toasifyConfigInterface {
  position: 'top-left'|'top-right'|'top-center'|'bottom-left'|'bottom-right'|'bottom-center',
  autoClose: number,
  hideProgressBar: boolean,
  closeOnClick: boolean,
  pauseOnHover: boolean,
  draggable: boolean,
  progress: any,
}

const toasifyConfig: toasifyConfigInterface = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}
export default toasifyConfig;