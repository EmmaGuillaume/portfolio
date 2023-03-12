<script lang="ts">
</script>

<header class="header">
    <div class="header__title">
        <a href="#"><h1>Emma Guillaume Portfolio</h1></a>
        <div class="header__title--underline" />
    </div>

    <div class="buttons__header">
        <a href="#">CV</a>
        <a href="#">Contact</a>
    </div>
</header>

<style>
    a {
        text-decoration: none;
    }
    h1 {
        font-weight: 800;
        font-size: 32px;
    }
    .header {
        padding: 3vh 0 2vh 0;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 2vh;
    }
    .header__title--underline {
        margin-top: 1vh;
        background-color: #79a671;
        width: 100%;
        height: 5px;
    }
    .buttons__header {
        display: flex;
        gap: 5vw;
    }

    .buttons__header a {
        font-weight: 400;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        color: #303d21;
        border: solid 2px #303d21;
        border-radius: 30px;
        padding: 8px 8px;
        width: 72px;
    }
    @media screen and (min-width: 868px) {
        .header {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>
