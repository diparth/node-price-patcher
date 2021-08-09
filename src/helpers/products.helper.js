const getPrice = (product, new_sales) => {
    let diff = diffInPercent(new_sales, product.estimated_weekly_sales);
    let price = product.price;
    
    if (diff <= 10) {
        price = (product.price * 90) / 100;
    } else if (10 < diff && diff <= 25) {
        price = (product.price * 80) / 100;
    } else if (25 < diff) {
        price = (product.price * 70) / 100;
    }
    
    return price;
};

const diffInPercent = (actual_sales, est_weekly_sales) => {
    if (actual_sales < est_weekly_sales) {
        let diff = est_weekly_sales - actual_sales;
        let percent = (diff * 100) / est_weekly_sales;
        
        return percent;
    } else {
        return 0;
    }
};

exports.getPrice = getPrice;
exports.diffInPercent = diffInPercent;
