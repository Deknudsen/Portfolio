<template>
    <div id="modalBox" class="modalBox">
        <div id="modalContent" class="modalContent">
            <span id="close" class="noselect" onclick="closeMe()">&times;</span>
            <form class="contentBox">
                <label for="contactName">Navn</label>
                <input type="text" id="contactName" name="contactName" required>
                <label for="contactMail">Email</label>
                <input type="email" id="contactMail" name="contactMail" required>
                <label for="contantText">Hvad kan jeg gøre for dig?</label>
                <textarea name="contactText" id="contactText" cols="30" rows="10" required></textarea>
                <input id="formSubmit" type="submit" value="Send">
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
    
</script>

<style lang="scss" scoped>
.modalBox {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 75px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #565656;
    background-color: rgba(0, 0, 0, 0.5);
}

.modalContent {
    width: 40%;
    height: 85%;
    margin: auto;
    border: 2px solid #145629;
    border-radius: 3px;
    background-color: #fdfdfd;
}

.modalContent span {
    float: right;
    font-family: 'Roboto', sans-serif;
    padding: 12px 22px;
    font-size: 32px;
    margin-left: -62px;
    cursor: pointer;
    color: #565656;
}

.modalContent .contentBox {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    height: 100%;
}

.modalContent .contentBox label {
    font-family: 'Roboto', sans-serif;
    padding: 5px 0;
    font-size: 24px;
    color: #145629;
    font-weight: 500;
} 

.modalContent .contentBox input {
    margin-bottom: 25px;
    border: 2px solid #145629;
    height: 60px;
    border-radius: 3px;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    padding: 0 10px;
}

.modalContent .contentBox input:focus {
    outline: none !important;
    border: 2px solid #145629;
}

.modalContent .contentBox textarea {
    margin-bottom: 25px;
    border: 2px solid #145629;
    height: 240px;
    border-radius: 3px;
    width: 100%;
    resize: none;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    padding: 10px;
    box-sizing: border-box;
}

.modalContent .contentBox textarea:focus {
    outline: none !important;
    border: 2px solid #145629;
}

#formSubmit {
    width: 40%;
    margin: 0 auto;
    color: #145629;
    background-color: #fdfdfd;
}

#formSubmit:hover {
    color: #fdfdfd;
    background-color: #145629;
}
</style>