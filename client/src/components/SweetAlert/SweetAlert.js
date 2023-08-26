import Swal from 'sweetalert2'

// background: 'var(--verdePrincipal)'
export const alertDelWhislist = () => {

    return (Swal.fire({
        icon: 'warning',
        title: 'warning!',
        text: 'you want to remove the product from your wish list',
        color: 'black',
        background: 'var(--verdeClaro)',
        confirmButtonText: 'Accept',
        confirmButtonColor: 'var(--verdePrincipal)',
        showCancelButton: true,
        cancelButtonText: 'Cancel',
        cancelButtonColor: 'var(--verdePrincipal)',
    })
        .then(res => {
            return res.isConfirmed;
        })
    )
}
