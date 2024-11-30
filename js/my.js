const productList = [
    // Giày
    {
        id: 1,
        category: 'giày',
        linkUrl: '/img/product-4.jpg',
        name: 'Giày thể thao nam',
        priceNew: '$100',
        priceOld: '$180',
        star: 5,
        linkDetail: 'product-detail.html?id=1'
    },
    {
        id: 2,
        category: 'giày',
        linkUrl: '/img/product-1-1.jpg',
        name: 'Giày chạy bộ nữ',
        priceNew: '$120',
        priceOld: '$200',
        star: 4.5,
        linkDetail: 'product-detail.html?id=2'
    },
    {
        id: 3,
        category: 'giày',
        linkUrl: '/img/product-4.jpg',
        name: 'Giày lười nam',
        priceNew: '$90',
        priceOld: '$150',
        star: 4,
        linkDetail: 'product-detail.html?id=3'
    },
    {
        id: 4,
        category: 'giày',
        linkUrl: '/img/product-4.jpg',
        name: 'Giày cao gót nữ',
        priceNew: '$110',
        priceOld: '$190',
        star: 4.8,
        linkDetail: 'product-detail.html?id=4'
    },
    {
        id: 5,
        category: 'giày',
        linkUrl: '/img/product-4.jpg',
        name: 'Giày sneakers trẻ em',
        priceNew: '$70',
        priceOld: '$100',
        star: 4.6,
        linkDetail: 'product-detail.html?id=5'
    },
    // Áo
    {
        id: 6,
        category: 'áo',
        linkUrl: '/img/product-2.jpg',
        name: 'Áo thun nam',
        priceNew: '$30',
        priceOld: '$50',
        star: 4,
        linkDetail: 'product-detail.html?id=6'
    },
    {
        id: 7,
        category: 'áo',
        linkUrl: '/img/product-7.jpg',
        name: 'Áo sơ mi nữ',
        priceNew: '$40',
        priceOld: '$70',
        star: 4.8,
        linkDetail: 'product-detail.html?id=7'
    },
    {
        id: 8,
        category: 'áo',
        linkUrl: '/img/product-ao-gio.jpg',
        name: 'Áo khoác gió',
        priceNew: '$60',
        priceOld: '$100',
        star: 4.7,
        linkDetail: 'product-detail.html?id=8'
    },
    {
        id: 9,
        category: 'áo',
        linkUrl: '/img/product-ao-hook.jpg',
        name: 'Áo hoodie',
        priceNew: '$50',
        priceOld: '$80',
        star: 4.9,
        linkDetail: 'product-detail.html?id=9'
    },
    {
        id: 10,
        category: 'áo',
        linkUrl: '/img/product-ao-vest.jpg',
        name: 'Áo vest',
        priceNew: '$100',
        priceOld: '$150',
        star: 4.5,
        linkDetail: 'product-detail.html?id=10'
    },
    // Phụ kiện
    {
        id: 11,
        category: 'phụ kiện',
        linkUrl: '/img/product-mat-kinh.jpg',
        name: 'Kính mát thời trang',
        priceNew: '$25',
        priceOld: '$45',
        star: 4.7,
        linkDetail: 'product-detail.html?id=11'
    },
    {
        id: 12,
        category: 'phụ kiện',
        linkUrl: '/img/product-6.jpg',
        name: 'Đồng hồ đeo tay',
        priceNew: '$150',
        priceOld: '$250',
        star: 5,
        linkDetail: 'product-detail.html?id=12'
    },
    {
        id: 13,
        category: 'phụ kiện',
        linkUrl: '/img/product-tui-xach.jpg',
        name: 'Túi xách nữ',
        priceNew: '$80',
        priceOld: '$130',
        star: 4.6,
        linkDetail: 'product-detail.html?id=13'
    },
    {
        id: 14,
        category: 'phụ kiện',
        linkUrl: '/img/product-mu.jpg',
        name: 'Mũ lưỡi trai',
        priceNew: '$15',
        priceOld: '$25',
        star: 4.3,
        linkDetail: 'product-detail.html?id=14'
    },
    {
        id: 15,
        category: 'phụ kiện',
        linkUrl: '/img/product-thac-lung.jpg',
        name: 'Thắt lưng da',
        priceNew: '$40',
        priceOld: '$70',
        star: 4.4,
        linkDetail: 'product-detail.html?id=15'
    },
    // Chăm sóc da
    {
        id: 16,
        category: 'chăm sóc da',
        linkUrl: '/img/product-8.jpg',
        name: 'Kem dưỡng ẩm',
        priceNew: '$20',
        priceOld: '$35',
        star: 4.6,
        linkDetail: 'product-detail.html?id=16'
    },
    {
        id: 17,
        category: 'chăm sóc da',
        linkUrl: '/img/product-8.jpg',
        name: 'Sữa rửa mặt',
        priceNew: '$15',
        priceOld: '$25',
        star: 4.4,
        linkDetail: 'product-detail.html?id=17'
    },
    {
        id: 18,
        category: 'chăm sóc da',
        linkUrl: '/img/product-8.jpg',
        name: 'Mặt nạ dưỡng da',
        priceNew: '$10',
        priceOld: '$20',
        star: 4.5,
        linkDetail: 'product-detail.html?id=18'
    },
    {
        id: 19,
        category: 'chăm sóc da',
        linkUrl: '/img/product-8.jpg',
        name: 'Toner làm sạch',
        priceNew: '$18',
        priceOld: '$30',
        star: 4.3,
        linkDetail: 'product-detail.html?id=19'
    },
    {
        id: 20,
        category: 'chăm sóc da',
        linkUrl: '/img/product-8.jpg',
        name: 'Kem chống nắng',
        priceNew: '$25',
        priceOld: '$40',
        star: 4.8,
        linkDetail: 'product-detail.html?id=20'
    },
];

const loadProduct = document.getElementById('loadProduct');
let productHTML = '';

productList.forEach(product => {
    productHTML += `
        <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
          <a href ="${product.linkDetail}">
                <div class="product-item bg-light mb-4">
                    <div class="product-img position-relative overflow-hidden">
                        <img class="img-fluid w-100" src="${product.linkUrl}" alt="${product.name}">
                       
                    </div>
                    <div class="text-center py-4">
                        <a class="h6 text-decoration-none text-truncate" href="${product.linkDetail}">${product.name}</a>
                        <div class="d-flex align-items-center justify-content-center mt-2">
                            <h5>${product.priceNew}</h5>
                            <h6 class="text-muted ml-2"><del>${product.priceOld}</del></h6>
                        </div>
                        <div class="d-flex align-items-center justify-content-center mb-1">
                            ${Array(Math.floor(product.star)).fill('<small class="fa fa-star text-primary mr-1"></small>').join('')}
                            ${product.star % 1 !== 0 ? 
                            '<small class="fa fa-star-half-alt text-primary mr-1"></small>' : ''}
                            <small>(${product.id})</small>
                        </div>
                    </div>
                </div>
          </a>
        </div>
    `;
});



function loadAllProducts() {
    let productHTML = '';
    productList.forEach(product => {
        productHTML += `
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a href ="${product.linkDetail}">
                    <div class="product-item bg-light mb-4">
                        <div class="product-img position-relative overflow-hidden">
                            <img class="img-fluid w-100"  src="${product.linkUrl}"alt="${product.name}">
                        </div>
                        <div class="text-center py-4">
                            <a class="h6 text-decoration-none text-truncate" href="${product.linkDetail}">${product.name}</a>
                            <div class="d-flex align-items-center justify-content-center mt-2">
                                <h5>${product.priceNew}</h5>
                                <h6 class="text-muted ml-2"><del>${product.priceOld}</del></h6>
                            </div>
                            <div class="d-flex align-items-center justify-content-center mb-1">
                                ${Array(Math.floor(product.star)).fill('<small class="fa fa-star text-primary mr-1"></small>').join('')}
                                ${product.star % 1 !== 0 ? '<small class="fa fa-star-half-alt text-primary mr-1"></small>' : ''}
                                <small>(${product.id})</small>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        `;
    });

    const loadProduct = document.getElementById('loadProduct');
    loadProduct.innerHTML = productHTML;
}

// Gọi hàm này để tải tất cả sản phẩm khi trang được load
loadAllProducts();


loadProduct.innerHTML = productHTML;

function filterProductsByCategory(category) {
    const filteredProducts = productList.filter(product => product.category === category);

    let productHTML = '';
    filteredProducts.forEach(product => {
        productHTML += `
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a href ="${product.linkDetail}">
                    <div class="product-item bg-light mb-4">
                        <div class="product-img position-relative overflow-hidden">
                            <img class="img-fluid w-100"  src="${product.linkUrl}" alt="${product.name}">
                        </div>
                        <div class="text-center py-4">
                            <a class="h6 text-decoration-none text-truncate" href="${product.linkDetail}">${product.name}</a>
                            <div class="d-flex align-items-center justify-content-center mt-2">
                                <h5>${product.priceNew}</h5>
                                <h6 class="text-muted ml-2"><del>${product.priceOld}</del></h6>
                            </div>
                            <div class="d-flex align-items-center justify-content-center mb-1">
                                ${Array(Math.floor(product.star)).fill('<small class="fa fa-star text-primary mr-1"></small>').join('')}
                                ${product.star % 1 !== 0 ? '<small class="fa fa-star-half-alt text-primary mr-1"></small>' : ''}
                                <small>(${product.id})</small>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        `;
    });

    // Hiển thị sản phẩm vào thẻ `loadProduct`
    const loadProduct = document.getElementById('loadProduct');
    loadProduct.innerHTML = productHTML;
}
