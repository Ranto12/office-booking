import { LeftSlideIcon, RightSlideIcon } from '../../../assets'

const index = ({direction, moveSlide}) => {
  return (
    <button onClick={moveSlide}
    className={`w-[60px] h-[60px] rounded-full bg-white border-slate-800 border-0 absolute flex items-center cursor-pointer p-5 ${direction === "next" ? ' right-3 translate-x-[50%] ' : 'left-3 -translate-x-[50%]'}`}>
        <img src={direction === "next" ? RightSlideIcon : LeftSlideIcon} />
    </button>
  )
}

export default index