document.addEventListener('DOMContentLoaded', () => {
    const brush = {
        active: false,
        moving: false,
        pos: { x: 0, y: 0},
        oldPos: null
    }

    const canvas = document.querySelector('#tela')
    const context = canvas.getContext('2d')

    canvas.width = 700
    canvas.height = 500

    context.lineWidth = 7
    context.strokeStyle = 'green'

    
})