'use client'

import { useState } from 'react'

export default function NewTodoForm() {
  const [state, setState] = useState('')

  return (
    <div>
      <form>
        <input type="text" />
      </form>
    </div>
  )
}
