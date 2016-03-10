import uuid from 'node-uuid';
import alt from '../libs/alt';
import NoteActions from '../actions/NoteActions';

class NoteStore {
  constructor() {
    this.bindActions(NoteActions);

    this.notes = [];

    this.exportPublicMethods({
      getNotesByIds: this.getNotesByIds.bind(this)
    });
  }

  getNotesByIds(ids) {
    return (ids || []).map(id => {
      return this.notes.filter(note => note.id === id);
    }).filter(a => a.length).map(a => a[0]);
  }

  create(note) {
    const notes = this.notes;

    note.id = uuid.v4();

    this.setState({
      notes: notes.concat(note)
    });

    return note;
  }

  update(updatedNode) {
    const notes = this.notes.map(note => {
      if (note.id === updatedNode.id) {
        return Object.assign({}, note, updatedNode);
      }

      return note;
    });

    //ES6 reminder: This is the same as this.setState({notes:notes});
    this.setState({notes});
  }

  delete(id) {
    this.setState({
      notes: this.notes.filter(note => note.id !== id)
    });
  }
}

export default alt.createStore(NoteStore, 'NoteStore');
