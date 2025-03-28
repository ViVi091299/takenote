import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.w3schools.com/');
});

test.describe('Test w3school', () => {
    test('lấy phần tử có id="main"', async ({ page }) => {
        page.locator('#main')
    });
    test('lấy phần tử có id="tutorials_list"', async ({ page }) => {
        page.locator('#tutorials_list')
    });
    test('lấy phần tử có class="classic"', async ({ page }) => {
        page.locator('.classic')
    });
    test('lấy tất cả các phần tử có class="w3-content"', async ({ page }) => {
        page.locator('.w3-content')
    });

    test('lấy tất cả các phần tử có id="exercises_list" và những phần trước đó', async ({ page }) => {
        const elements = await page.locator('#exercises_list').all();

        for (const element of elements) {
            // lấy phần tử trước đó
            const previousElement = await element.locator('xpath=preceding-sibling::*[1]').first();

            if (await previousElement.count() > 0) {
                await previousElement.innerHTML();
            }
        }
    });

    test('lấy phần tử có attribute preserveAspectRatio = "none"', async ({ page }) => {
        page.locator('[preserveAspectRatio="none"]');
    });

    test('lấy tất cả các thẻ có text là CSS Reference', async ({ page }) => {
        page.getByText('CSS Reference');
    });
});

