import React, { useState } from 'react'

const AddJobForm = () => {


  const [jobName, setJobName] = useState<string>("")
  const [location, setLocation ] = useState<string>('')

  return (
    <div>AddJobForm</div>
  )
}

export default AddJobForm