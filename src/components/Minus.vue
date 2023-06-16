<template>
    <div class="minus">
        <div class="create">
            <h2>Minuses</h2>
            <div class="head">
                <img src="../assets/pig.jpg" alt="">
            </div>
            <h3>What, how, when you spend on</h3>
            <form class="form" @submit.prevent="addToMinuses()">
                <input type="text" placeholder="Description" v-model="newMinus.description">
                <input type="number" min="1" v-model="newMinus.howMuch" placeholder="How much">
                <input type="date" v-model="newMinus.date" placeholder="When">
                <select name="" id="" v-model="newMinus.type">
                        <option value="source" selected disabled hidden>Source</option>
                        <option 
                            v-for="type in minusTypes"
                            :value="type">
                            {{type}}
                        </option>
                </select>
                <button type="submit">Save</button>
            </form>
        </div>
        
        <div class="show">
            <h3>Show the spending ways</h3>
            <h2 v-if="!minus.length">Enter how you spent</h2>
            <div class="show_sources" v-if="minus.length">
                <div 
                    class="source" 
                    v-for="item in minus"
                >
                    <p><strong>Description:</strong>  {{ item.description }}</p>
                    <p><strong>How much:</strong>  {{ item.howMuch }}</p>
                    <p><strong>Date:</strong>  {{ item.date }}</p>
                    <p><strong>Type:</strong> {{ item.type }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['minus'],
        data(){
            return{
                newMinus: {
                    description: '',
                    howMuch: '',
                    date: '',
                    type: ''
                },
                minusTypes: ['Food', 'Entertainment', 'Technology', 'CLothes', 'Others']
            }
        },
        methods: {
            addToMinuses(){
                if(this.newMinus.description != "" && this.newMinus.howMuch != '' && this.newMinus.date != '' && this.newMinus.type != ''){
                    this.minus.push({
                        description: this.newMinus.description,
                        howMuch: this.newMinus.howMuch,
                        date: this.newMinus.date,
                        type: this.newMinus.type
                    });
                    localStorage.setItem('minus', JSON.stringify(this.minus));
                    this.newMinus.description = "" 
                    this.newMinus.howMuch = ''  
                    this.newMinus.date = ''  
                    this.newMinus.type = ''
                }
                else {
                    alert('Plase fill in all the info')
                }
            }
        }
    }
</script>

<style scoped>
.minus{
    border: 3px solid orchid;
    font-family: 'Courier New', Courier, monospace;
    padding: 15px;
    display: flex;
    width: 700px;
}
.create{
    width: 40%;
}
.show{
    width: 60%;
    height: 100%;
}
.show_sources{
    max-height: 500px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
}
.source{
    border: 2px solid rgb(230, 95, 95);
    padding: 20px;
}
.head img{
    margin-top: 20px;
    width: 250px;
}
.head{
    display: flex;
    justify-content: center;
    align-items: center;
}
.form{
    border: 2px solid lightcoral;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    padding: 20px;
}
input, select, button{
    border: 1px solid blueviolet;
    padding: 10px;
    font-size: 1.01rem;
    border-radius: .8ch;
}
button{
    background-color: blueviolet;
    color: white;
}
</style>