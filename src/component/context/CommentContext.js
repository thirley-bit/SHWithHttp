import { createContext, useContext } from 'react';

const CommentCtx =  createContext();

export function useCommentContext() {
  return useContext(CommentCtx);
}


export default function CommentContext({ value, children }) {
    return <CommentCtx.Provider value={value}>
        {children}
    </CommentCtx.Provider>
}