import create from 'zustand'


interface BearState {
  bears: number,
  loading:boolean,
  increase: () => void
}

const useBearStore = create<BearState>((set) => ({
  bears: 0,
  loading:false,
  increase: () => {
    set(() => ({ loading:true }))
    set((state) => ({ bears: state.bears + 1 }))
  }
}))

export default useBearStore