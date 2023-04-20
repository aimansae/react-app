import React, { useState } from 'react'

const UpdateArrays = () => {

    const [tags, setTags] = useState(['happy,', 'cheerful'])
    
    const handleClick = () => {
        // TO ADD NEW ITEM IN ARRAY
        // by creating a new array
        //setTags([...tags, ' updatedtext', ''])

        // to remove

        setTags(tags.filter(tag => tag !== 'happy'))

        // to update
        setTags(tags.map(tag => tag === 'happy'? 'happiness' : tag))


    }
    return (
    <div>
        {tags}
      <button onClick={handleClick}>Update Arrays</button>
    </div>
  )
}

export default UpdateArrays
