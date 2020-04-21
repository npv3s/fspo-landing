document.addEventListener('DOMContentLoaded', () => {
    let circuit_frames = ["img/sprite1.svg", "img/sprite2.svg", "img/sprite3.svg"], circuit_counter = 0;
    let asm_frames = ["┌────────┬────────┐<br>|AX: FFFF|BX: FFFF|<br>└────────┴────────┘<br><br><br><br>",
            "┌────────┬────────┐<br>|AX: 0005|BX: FFFF|<br>└────────┴────────┘<br>mov ax, 5<br><br><br>",
            "┌────────┬────────┐<br>|AX: 0005|BX: 0007|<br>└────────┴────────┘<br>mov ax, 5<br>mov bx, 7<br><br>",
            "┌────────┬────────┐<br>|AX: 000C|BX: 0007|<br>└────────┴────────┘<br>mov ax, 5<br>mov bx, 7<br>add ax, bx"],
        asm_counter = 0;

    function circuitChangeFrame() {
        if (++circuit_counter >= circuit_frames.length) circuit_counter = 0;
        Array.from(document.querySelectorAll("#circuit"))
            .pop().src = circuit_frames[circuit_counter];
    }

    function asm_changeFrame() {
        if (++asm_counter >= asm_frames.length) asm_counter = 0;
        Array.from(document.querySelectorAll("#asm-animation"))
            .pop().innerHTML = asm_frames[asm_counter];
    }

    setInterval(circuitChangeFrame, 1000);
    setInterval(asm_changeFrame, 1000);
});