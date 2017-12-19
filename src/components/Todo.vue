<template>
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
</template>

<script>
    import frb from '../../firebaseMod'

    let userId = frb.auth().currentUser.uid;
    let todosRef = frb.database().ref('todos/' + userId);

    export default {
        name: 'about',
        firebase: {
            todos: todosRef
        }, 
        data () {
            return {

            }
        },
        methods: {
            addTestBook: function() {
                todosRef.push( { text : "Make this todo list" });
            }
        }
    }
</script>