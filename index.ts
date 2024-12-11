import { Extension } from '@tiptap/core'
import { Plugin, TextSelection } from '@tiptap/pm/state'

export const AutoWordSelect = Extension.create({
  name: 'autoWordSelect',

  addProseMirrorPlugins() {
    return [
      new Plugin({
        props: {
          handleDOMEvents: {
            mouseup: (view) => {
              const { state } = view
              const { from, to } = state.selection
              
              if (from === to) return false
              
              const doc = state.doc
              let wordStart = from
              let wordEnd = to
              
              while (wordStart > 0) {
                const char = doc.textBetween(wordStart - 1, wordStart)
                if (!char.match(/[a-zA-Z0-9\u00C0-\u024F]/)) break
                wordStart--
              }
              
              while (wordEnd < doc.content.size) {
                const char = doc.textBetween(wordEnd, wordEnd + 1)
                if (!char.match(/[a-zA-Z0-9\u00C0-\u024F]/)) break
                wordEnd++
              }
              
              if (wordStart !== from || wordEnd !== to) {
                view.dispatch(
                  state.tr.setSelection(TextSelection.create(doc, wordStart, wordEnd))
                )
              }
              
              return false
            }
          }
        }
      })
    ]
  }
})
