import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Tạo async action để fetch todos
export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    // Thay thế URL này bằng API endpoint của bạn
    const response = await fetch('https://api.example.com/todos')
    return response.json()
  }
)

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {
    // Các reducers đồng bộ nếu cần
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default todosSlice.reducer