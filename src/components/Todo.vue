<!-- <template>
    <div class="todo">
        Bam
        <br>
        <table>
            <tr v-for="todo in todos">
                <td>{{todo}}</td>
            </tr>
        </table>
        <hr>
        Debug:
        <br>
        <button v-on:click="addTestBook">Add test book</button>
    </div>
</template> -->

<template lang="jade">
    .todo
        h4 bam
        br
        .panel.panel-default
            .panel-heading
                h3.panel-title Add Todos
            .panel-body
                .form-group
                    label Todo:
                    input(type="text", v-model="newTodo").form-control
                button.btn(v-on:click="addTodo") Add
        br
        .panel.panel-default
            .panel-heading
                h3.panel-title Todos
            .panel-body
                table.table.table-striped
                    tbody
                        tr(v-for="todo in todos")
                            td {{ todo.text }}
                            td {{ todo['.key'] }}
                            td 
                                span.glyphicon.glyphicon-trash(v-on:click="removeTodo(todo)")
        hr
        | Debug:
        br
        button(v-on:click="addTestTodo") Add test todo
</template>

<script>
import frb from '../../firebaseMod'

let userId;// = frb.auth().currentUser.uid;
let todosRef;// = frb.database().ref('todos/');

if ( frb.auth().currentUser ) {
    userId = frb.auth().currentUser.uid;
    todosRef = frb.database().ref('todos/' + userId );
} else {
    todosRef = frb.database().ref('todos/' );
}


var vuecomp = {
    name: 'about',

    firebase: function(){
        return {
            todos: todosRef
        }
        
    }, 
    data () {
        return {
            newTodo: ''
        }
    },
    methods: {
        addTestTodo: function() {
            todosRef.push( { text : "Make this todo list" });
        },
        addTodo: function() {
            todosRef.push( {text: this.newTodo });
        },
        removeTodo: function(aTodo) {
            todosRef.child(aTodo['.key']).remove();
        }
    }
};
frb.auth().onAuthStateChanged( (user) => {
    if ( user ) {
        userId = user.uid;
        if ( userId ) {
            todosRef = frb.database().ref('todos/' + userId);
            //vuecomp
            //this.$bindAsObject('todos', todosRef.child(userId) );
        }
    } else {
        todosRef = frb.database().ref('todos/');
    }
});

export default vuecomp
</script>

<style scoped>
.todo {
    text-align: left ;
}
</style>