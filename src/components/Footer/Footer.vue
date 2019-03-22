<template>
<footer class="footer">
    <div class="links">
        <ul class="footer__list">
            <li>Features</li>
            <li>Pricing</li>
            <li>Support</li>
            <li>Contact</li>
        </ul>
    </div>
    <div class="copyright">
        <p>Follow me on twitter</p>
        <p>Copyright 2019 - Tikken</p>
    </div>
</footer>
</template>

<style>
.footer {
    height: 20rem;
    background: #2F2E3D;
    color: #fff;
    position: relative;
    text-align: center;
}

.footer__list {
    padding: 4rem 0 2rem 0;
    display: flex;
    justify-content: center;
    list-style: none;
}
.footer__list li {
    margin: 2rem 2rem 1rem 2rem;
    font-size: 1.7rem;
}
.copyright {
    color: grey;
    font-size: 1.1rem;
}
</style>