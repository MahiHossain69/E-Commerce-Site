import React from 'react'
import Container from "./Container"
import Flex from "./Flex"
import Pone from "../assets/pone.png"
import Ptwo from "../assets/ptwo.png"
import Pthree from "../assets/pthree.png"

function ImageDown() {
  return (
  <section className='py-10'>

<Container>
    <Flex className="justify-between">
      <div className="w-[49%]">
        <div className="">
        <img src={Pone}></img>
        </div>
      </div>
      <div className="w-[49%]">
        <div className="">
            <img src={Ptwo}></img>
           
        </div>
        <div className="mt-[35px]">
            <img src={Pthree}></img>
           
        </div>
      </div>
    </Flex>
  </Container>
  </section>
  )
}

export default ImageDown
