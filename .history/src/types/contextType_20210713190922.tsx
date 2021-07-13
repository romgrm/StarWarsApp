interface Pseudo {
    pseudo: string; 
}

type ContextType = {
    todos: ITodo[];
    saveTodo: (todo: ITodo) => void;
    updateTodo: (id: number) => void;
  };