type Item =  {
	id: number,
	title: string,
	completed: boolean
}

type Editable = {
    text: string,
    type: string,
	children: any
}

type AppState = {
    todoItems: Item[]
}

type TodoPayloadTitle = {
    title: string
}

type TodoPayloadId = {
	id: number
}

export type { Item, Editable, AppState, TodoPayloadTitle, TodoPayloadId }