

export default function Animation(num = (-1), trigger) {

    if (trigger === 'up') {
        num = num + 0.05;
        return +num.toFixed(2)
    } else {
        num = num - 0.05;
        return +num.toFixed(2)
    }

}

