$('#exampleModal').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget)
    var recipient = button.data('whatever')
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
})
// $('#my_modal').on('show.bs.modal', function(e) {
//     var bookId = $(e.relatedTarget).data('book-id');
//     $(e.currentTarget).find('input[name="bookId"]').val(bookId);
// });

