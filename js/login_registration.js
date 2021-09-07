const execute_animate_login = () => document.querySelector('#form_login')
    .classList.add('animate')

const execute_animate = () => document.querySelector('#form_create_register')
    .classList.add('animate')

const remove_animate = () => document.querySelector('#form_create_register')
    .classList.remove('animate')


const mask_cpf = (text) => {
    return text
        .replace(/\D+/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
}

const mask_phone = (text) => {
    return text
        .replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1')
}

const apply_mask_cpf = (event) => {
    event.target.value = mask_cpf(event.target.value)
}

const apply_mask_phone = (event) => {
    event.target.value = mask_phone(event.target.value)
}

const open_registration_record = () => {

    document.querySelector('#form_login')
        .classList.add('display_none')

    document.querySelector('#no_register_forgot_password')
        .classList.add('display_none')
     
    document.querySelector('#form_login')
        .classList.remove('animate')

    document.querySelector('#form_create_register')
        .classList.remove('display_none')

    document.querySelector('#registered')
        .classList.remove('display_none')

    setTimeout(execute_animate, 500)

}

const open_login = () => {

    document.querySelector('#form_login')
        .classList.remove('display_none')

    document.querySelector('#no_register_forgot_password')
        .classList.remove('display_none')

    document.querySelector('#form_create_register')
        .classList.add('display_none')

    document.querySelector('#registered')
        .classList.add('display_none')

    setTimeout(execute_animate_login, 500)

    remove_animate()

}


document.querySelector('#cpf')
    .addEventListener('keyup', apply_mask_cpf)

document.querySelector('#phone')
    .addEventListener('keyup', apply_mask_phone)

document.querySelector('#no_register')
    .addEventListener('click', open_registration_record)

document.querySelector('#registered')
    .addEventListener('click', open_login)