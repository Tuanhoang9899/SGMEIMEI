$(document).ready(function() {

    // Toggle chat menu
    function toggleChatMenu() {
        const $chatMenu = $('#chatMenu');
        const $mainBtn = $('#mainChatBtn');
        const $chatIcon = $('#chatIcon');

        // Sử dụng .toggleClass() để đơn giản hóa logic if/else cho class
        // và .hasClass() để kiểm tra trạng thái nếu cần xử lý phức tạp hơn
        if ($chatMenu.hasClass('active')) {
            $chatMenu.removeClass('active');
            $mainBtn.removeClass('active');
            $chatIcon.removeClass('fa-times').addClass('fa-comments');
        } else {
            $chatMenu.addClass('active');
            $mainBtn.addClass('active');
            $chatIcon.removeClass('fa-comments').addClass('fa-times');
        }
    }

    // Gán sự kiện click cho nút chính
    $('#mainChatBtn').on('click', toggleChatMenu);


    // Open WeChat modal
    function openWeChatModal() {
        $('#wechatModal').addClass('active');
        // jQuery: dùng .css() để set style
        $('body').css('overflow', 'hidden');
    }

    // Close WeChat modal
    function closeWeChatModal() {
        $('#wechatModal').removeClass('active');
        $('body').css('overflow', 'auto');
    }


    // Gán sự kiện cho các thành phần
    // Giả sử có nút/phần tử nào đó gọi openWeChatModal()
    // Ví dụ: $('#openWechatButton').on('click', openWeChatModal);


    // Close modal when clicking outside
    $('#wechatModal').on('click', function(e) {
        // Kiểm tra xem phần tử được click có phải là chính modal (this) không
        if (e.target === this) {
            closeWeChatModal();
        }
    });

    // Close menu when clicking outside
    $(document).on('click', function(e) {
        const $chatContainer = $('.chat-container');
        // .closest() không cần thiết vì ta muốn kiểm tra xem click có nằm TRONG container không
        // Dùng !$.contains(container, target) để kiểm tra click bên ngoài
        if (!$chatContainer.is(e.target) && !$chatContainer.has(e.target).length) {
            // Kiểm tra click bên ngoài phần tử chat-container

            const $chatMenu = $('#chatMenu');
            const $mainBtn = $('#mainChatBtn');
            const $chatIcon = $('#chatIcon');

            // Chỉ đóng menu nếu nó đang mở
            if ($chatMenu.hasClass('active')) {
                $chatMenu.removeClass('active');
                $mainBtn.removeClass('active');
                $chatIcon.removeClass('fa-times').addClass('fa-comments');
            }
        }
    });

    // Close modal with Escape key
    $(document).on('keydown', function(e) {
        // e.which === 27 là mã của phím Escape
        if (e.key === 'Escape') {
            closeWeChatModal();
        }
    });

    // Nếu bạn muốn tích hợp hàm openWeChatModal() vào menu chat (ví dụ có nút trong #chatMenu)
    // Bạn cần gán sự kiện click cho nút đó ở đây.


});